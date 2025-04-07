import { Endereco, PrismaClient, Usuario } from '@prisma/client'

const prisma = new PrismaClient()

const cadastrar = async (usuario: Usuario & { endereco: Endereco }) => {

    let resultado = await prisma.usuario.create({
        data: {
            nome: usuario.nome,
            email: usuario.email,
            endereco: {
                create: ({
                    bairro: usuario.endereco.bairro,
                    cidade: usuario.endereco.cidade,
                    cep: usuario.endereco.cep,
                    estado: usuario.endereco.estado,
                    numero: usuario.endereco.numero,
                    rua: usuario.endereco.rua
                })
            }
        }
    })

    console.log(`Usuario cadastrado:`)
    console.log(`Nome: ${usuario.nome}, e-mail: ${usuario.email}`)
}

const usuario: Usuario & { endereco: Endereco } = {
    id: 0,
    nome: "Joao Paulo",
    email: "jp@mail.com",
    endereco: {
        id: 0,
        rua: 'ABC',
        numero: '123',
        bairro: 'ABC',
        cidade: 'ABC',
        estado: 'AA',
        cep: '123',
        usuarioId: 0
    }
}

setTimeout(async () => { cadastrar(usuario) }, 1000);