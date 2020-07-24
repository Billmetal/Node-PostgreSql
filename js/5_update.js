/****** Exercício Final *****
 * Fazer as mesmas modificações do exercício anterior :
 * - Atualize o nome do participante Carlos (id 1) para Carlos Augusto. 
 * - Remova o participante Carlos (id 1) do evento com id 1 ***/

const db = require('./_database')

async function updateData(){
    await db.connect()
    // alterar nome 

    const queryAlterar = "UPDATE participante SET nome=$1 WHERE id=$2"

    await db.query(queryAlterar, ['Carlos Augusto',1])

    // remover do evento

    const queryRemover = "DELETE FROM evento_participante WHERE participante_id=$1"

    await db.query(queryRemover, [1])

    await db.end()

    console.log("Dados Atualizados");

}

updateData()