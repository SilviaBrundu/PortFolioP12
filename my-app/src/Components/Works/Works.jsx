import data from '../../Data/data.json';
import WorkCard from '../WorkCard/WorkCard';
import './Works.css';


//je récupère le fichier jSon

function Works() {
    return (
        <div className='works-container-box'>
            <div className='works-container'>{data.map((work, index) => { //index = key, aide react a identifier les elements qui vont changer
                return (
                    <div key={index} className='works-content' >
                        <WorkCard work={work} ></WorkCard>
                    </div>
                )
            }
            )}
            </div>
        </div>
    )
}

export default Works