import sql from 'better-sqlite3'
const db = sql('meals.db')
export default async function getmeals(){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all();
}

export async function getmeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}