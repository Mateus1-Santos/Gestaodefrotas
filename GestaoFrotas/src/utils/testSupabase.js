import { supabase } from "../services/supabase";

export async function testarConexao(){
    try{
        const {data, error} = await supabase.from("GestãoDeFrotas").select("*").limit(1);
        if (error) {
            console.log("Erro ao consultar o Supabase", error);
            return{ok: false, error}
        } else {
            console.log("conexão bem sucedida!!!", data);
            return{ok: true, data}
        }
    }catch(error) {
        console.log("Error 404", err);
        return {ok: false, err}
    }
}