import React,{useContext,useEffect} from 'react';
import ProyecList from './ProyecList';
import ProyectoContext from "../../../context/proyects/ProyectoContext";

const ListPro = () => {
    const ProyectsContext = useContext(ProyectoContext);
    const{proyects,getProyetcs} = ProyectsContext;

    //obtener proyectos
    useEffect(() => {
        getProyetcs()
    //eslint-disable-next-line
    }, [])

    if (proyects.length === 0)return null;
    return (
        <div>
            {proyects.map(proyect=>(
                <ProyecList
                key = {proyect.id}
                proyect={proyect}
                />
            ))}
        </div>
    );
};

export default ListPro;