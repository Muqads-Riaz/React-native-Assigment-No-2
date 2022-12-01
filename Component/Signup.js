import React from "react"
import styles from "../Styling"
import { View, Text, TextInput, Button, Image, TouchableOpacity } from "react-native"
function SignUp (){
return <>
   <View style={styles.container }>
  
      <View style={{ flexDirection:"row" , justifyContent:"center"}}>
    <Image style={{ width: 300, height: 300 }} source={{ uri: 'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' }} />
    </View>
     <Text style={styles.heading}>Create your Account</Text>
    <TextInput  placeholderTextColor={'black'} style={styles.inp} placeholder="User Name" />
    <TextInput  placeholderTextColor={'black'}  style={styles.inp} placeholder="Password" />
    <View style={{ flexDirection:"row" , justifyContent:"center"}}>
    <TouchableOpacity style={styles.button}>
    <Text>SignUp</Text>
    </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row" , justifyContent:"center" , margin: 20}}>
      <Text style={styles.subheading}>Already have an Account?</Text>
      <Text style={styles.account}>Login</Text>
      </View>
    </View>
</>
}
export default SignUp



  