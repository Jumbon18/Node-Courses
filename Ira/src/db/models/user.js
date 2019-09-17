module.exports = (sequelize,DataTypes)=>{
const User = sequelize.define('user',{
    user_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstName:{
        allowNull:false,
        validate:{
            notNull:{msg:'First name is required'},
            customValidator(value){
                if(value.trim() === ''){
                    throw new Error('First name is invalid');
                }
            }
        }
    }
})
}