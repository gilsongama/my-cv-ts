import React, {useState} from 'react'
import interContato from '../../types/interContato'
import interEducacao from '../../types/interEducacao'
import { interPerfilDados } from '../../types/interPerfil'


function Sidebar(prop: interPerfilDados) {
    const [exibirContato, setExibirContato] = useState<boolean>(false)
    const {contatos, educacao} = prop.infor


    const mudar = () => {
        setExibirContato(!exibirContato)
    }
    return (
        <>
          <aside>
            <div className="sidebar">
              <h3>Contatos</h3>

              <button onClick={mudar}>Mostrar Contatos</button>
              {exibirContato &&
                
              <div className="lista-de-contatos">
                  {contatos.map((item: interContato) => (
                <li key={item.id}>
                  <div className="item-contato">
                    <h4>{item.tipo}</h4>
                    <p>{item.contato}</p>
                  </div>
                </li>
            ))}

              </div>
            }
            </div>

            <div className="sidebar">
              <h3>Educação</h3>
              <div className="lista-de-formacao">
                  {educacao.map((item: interEducacao) => (

                <li key={item.id}>
                  <h4>{item.curso}</h4>
                  <p>{item.instituicao}</p>
                </li>
                  ))}
              </div>
            </div>
          </aside>
        </>
    )
}
export default Sidebar
