import React from 'react'
import interExperiencia from '../../types/interExperiencia'
import {interPerfilDados} from '../../types/interPerfil'



function Section(prop: interPerfilDados){
    const {experiencia} = prop.infor

    return(
        <>
            <div className="experience">
                <h2>Experiência Profissional</h2>

                {experiencia.map((item: interExperiencia) => (
                    <div className="experience-item" key={item.id}>
                        <div>
                            <h4> {item.cargo}</h4>
                            <span>{item.periodo}</span>

                            <strong>{item.empresa}</strong>
                            <span>{item.local}</span>
                        </div>
                        <p>
                            {item.conteudo}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Section