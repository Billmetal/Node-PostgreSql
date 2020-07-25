/***** Exercício Final *******
 * Utilizando sequelize, tente fazer os exercícios abaixo:
 * - Adicione o campo data no evento
** - Cadastre 5 eventos com data futura
** - Liste os eventos que tenham a data no mês de Abril */

const Sequelize = require('sequelize')
const Op = Sequelize.Op

async function exercicio(){
    const models = await require('./models') 
    // adicionando o campo data no evento
    if(models.evento.data === null) {
        await models.sequelize.getQueryInterface().addColumn("eventos","data",Sequelize.STRING)
    }

    // cadastrando eventos
    await models.evento.create({nome: 'Evento de Basebol', data: '2021-02-25'})
    await models.evento.create({nome: 'Evento de MySql', data: '2021-03-10'})
    await models.evento.create({nome: 'Evento de Java', data: '2021-04-02'})
    await models.evento.create({nome: 'Evento de Python', data: '2021-04-15'})
    await models.evento.create({nome: 'Evento de JavaScript', data: '2021-04-23'})

    // listando eventos
    const eventosEmAbril = await models.evento.findAll({
        where: {
          data: {
            [Op.like]: '2021-04-%'
          }
        }
      })

      console.log("-------- Eventos de Abril --------")
      eventosEmAbril.forEach((evento) => {
          console.log("\nNome : ",evento.nome," no dia : ",evento.data)       
      })

      await models.sequelize.close()

      console.log("Exercício Finalizado com sucesso");
}

exercicio()