import { ProjectData } from "../../assets/data/data"
import { useNavigate,useState  } from 'react-router-dom';
import './index.css'
import GallerryItem from "../GalleryItem/GalleryItem";
const GalleryLayout=()=>{
    const Project1=ProjectData[0]
    const Project2=ProjectData[1]
    const Project3=ProjectData[2]
    const Project4=ProjectData[3]
    const Project5=ProjectData[4]
    const Project6=ProjectData[5]
    const Project7=ProjectData[6]

    return(
        <div className="GalleryLayout-wrapper grid pt-16">
            <GallerryItem Project={Project1}/>
            <GallerryItem Project={Project2}/>
            <GallerryItem Project={Project3}/>
            <GallerryItem Project={Project4}/>
            <GallerryItem Project={Project5}/>
            <GallerryItem Project={Project6}/>
            <GallerryItem Project={Project7}/>
        </div>
    )
}
export default GalleryLayout