const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const {ArtDetailsModel , UserDetailsModel} = require('./models/schema');
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();
const JWT_SECRET_KEY = 'abcdefgh';


const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}


//Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
// app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


async function connectdb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ArtBlog", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection success");

    const port = 4000;
    app.listen(port, function () {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (err) {
    console.log("DB not connected: " + err);
  }
}
connectdb();


app.get('/api/art_details/id/:id', async (req, res) => {
  try {
    const art = await ArtDetailsModel.findById(req.params.id);
    if (!art) {
      return res.status(404).json({ message: 'Art not found' });
    }
    res.json(art);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Add art details
// app.post('/api/art_details', async (req, res) => {
//   try {
//     const { art_category, art_image, art_desc } = req.body;

//     const art = new ArtDetailsModel({
//       art_category,
//       art_image,
//       art_desc,
//       created_at: new Date()
//     });
//     await art.save();
//     res.status(201).json({ message: "Art added successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// to handle file uploads
app.post('/api/art_details', upload.single('art_image'), async (req, res) => {
  try {
    const { art_category, art_desc } = req.body;
    const art_image = req.file ? `/uploads/${req.file.filename}` : '';


    const art = new ArtDetailsModel({
      art_category,
      art_image,
      art_desc,
      created_at: new Date()
    });
    await art.save();
    res.status(201).json({ message: "Art added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




// Get all art details
app.get('/api/art_details', async (req, res) => {
  try {
    const art = await ArtDetailsModel.find();
    res.json(art);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/art_details/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const art = await ArtDetailsModel.find({ art_category: category });
    res.json(art);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//create account
app.post('/api/signup', async (req, res) => {
  try {
    const { user_name, user_email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserDetailsModel({
      user_name,
      user_email,
      password,
      created_at: new Date(),
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});




//login 
//User login
app.post('/api/signin', async (req, res) => {
  try {
    const { user_name, password } = req.body;
    const user = await UserDetailsModel.findOne({ user_name });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      { userId: user._id, user_name: user.user_name },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '1h',
      }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// app.get('/api/saved_arts', authenticateToken, async (req, res) => {
//   try {
//     const user = await UserDetailsModel.findById(req.user._id).populate('saved_art');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user.saved_art);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// app.post('/api/save_art', authenticateToken, async (req, res) => {
//   try {
//     const { art_id } = req.body;

//     const user = await UserDetailsModel.findById(req.user._id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Check if the art is already saved
//     if (user.saved_art.includes(art_id)) {
//       return res.status(400).json({ message: 'Art already saved' });
//     }

//     user.saved_art.push(art_id);
//     await user.save();

//     res.status(200).json({ message: 'Art saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });



module.exports =app


