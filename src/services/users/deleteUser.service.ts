import { client } from "../../database";


const deleteUserService = async (userId: number): Promise<void> => {

    const queryString: string = `
        UPDATE
            users
        SET("active") = ROW(false)
        WHERE
            id = ${userId};
    `

    await client.query(queryString)   

}

export default deleteUserService