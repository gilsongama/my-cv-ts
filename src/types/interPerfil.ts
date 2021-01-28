import interEducacao from './interEducacao'
import interContato from './interContato'
import interExperiencia from './interExperiencia'

export interface interPerfil {
    nome: string,
    ocupacao: string,
    resumo: string,
    perfilProfissional: string,
    contatos: interContato[],
    educacao: interEducacao[],
    experiencia: interExperiencia[]
}

export interface interPerfilDados {
    infor: interPerfil
}

