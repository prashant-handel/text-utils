import React, {useState} from "react";

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [changeTheme, setChangeTheme] = useState("Enable Dark Mode")
    const toggleMode = ()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setChangeTheme("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setChangeTheme("Enable Light Mode")
        }
    }
  return (
    <div className="container my-5" style={myStyle}>
      <h3>About Us</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed mollitia atque ut, fugit possimus eum nihil perferendis sit soluta? Perspiciatis natus fuga itaque eum reprehenderit, enim eius ipsam nobis, hic commodi, placeat repudiandae rem? Hic eveniet facilis earum distinctio asperiores saepe natus cum minima repudiandae rerum nostrum obcaecati fugit, inventore laudantium? Error voluptatum quae doloremque non dolor, autem, dolorum quos odio maiores illum asperiores, voluptate doloribus iure libero! Adipisci, ratione voluptatem vero delectus, neque illum amet quo fuga velit vitae ex blanditiis totam quidem. Placeat repellendus provident natus quos numquam, sint ad eos qui veniam mollitia odio, sequi laborum neque sed nulla perspiciatis alias repudiandae esse a amet praesentium aliquid accusantium. Autem quibusdam laborum fugiat sequi aperiam non praesentium alias repellendus sapiente nobis odit iusto voluptates mollitia et molestias vitae odio eum, est maxime rem sed? Eos, labore? Repellat quidem provident fuga saepe officiis dicta maxime veritatis quaerat. Animi dolorem hic delectus eaque iusto id error odio aperiam distinctio neque explicabo, illo earum non sed? Quo placeat maiores corporis exercitationem sunt molestias earum aut blanditiis obcaecati, consectetur veritatis inventore error nulla modi animi officiis ad quisquam dolorem voluptatibus perferendis vel velit rerum. Quisquam ab error numquam tempora doloribus, obcaecati quaerat!</p>
      <button className="btn btn-primary mx-1" onClick={toggleMode}>
          {changeTheme}
        </button>
    </div>
  );
}
