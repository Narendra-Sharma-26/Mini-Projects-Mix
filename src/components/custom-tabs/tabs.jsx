import { useState } from "react"


export default function Tabs({tabsContent, onChange}){

    const [currentTabIndex,setcurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex){
        setcurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

return <div className="wrapper">
    <div className="heading">
        {
            tabsContent.map((tabItem,index)=>(
                <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`} onClick={()=>handleOnClick(index)} key={tabItem.label}>
                    <span className="label">{tabItem.label}</span>
                </div>
            ))
        }
    </div>
    <div className="content" style={{color: "red"}}>
        {
            tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
    </div>

</div>
}