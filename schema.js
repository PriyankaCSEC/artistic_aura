const mongoose=require('mongoose')


const userSchema= new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      user_email:{
        type:String,
        required:true,
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
      saved_art: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ArtDetailsModel'
      }]
})


// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   const hashedPassword = await bcrypt.hash(this.password, 10);
//   this.password = hashedPassword;
//   next();
// });

//art
const artSchema=new mongoose.Schema({
    art_category:String,
    art_image: String,
    art_desc: String,
    created_at: {
        type:Date,
        default:Date.now
    }
    
})

const ArtDetailsModel=mongoose.model("art_details",artSchema)
const UserDetailsModel=mongoose.model("user_details",userSchema)

module.exports = {
    ArtDetailsModel,
    UserDetailsModel
  };
  