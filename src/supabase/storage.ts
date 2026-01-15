import {v4 as uuid} from 'uuid'
import {supabase}   from "./index";

export async function uploadFileToSupabase(fileBuffer: ArrayBuffer, fileType: string, fileOwnerId: string) {
    if (import.meta.env.DEV) {
        console.debug("File Upload: ", fileType)
    }

    return await supabase
        .storage
        .from(import.meta.env.VITE_SUPABASE_STORAGE_BUCKET_ID)
        .upload(`/${uuid()}.${fileType.split('/')[1]}`, fileBuffer, {
            contentType: fileType,
            upsert     : true,
            metadata   : {
                fileOwner: fileOwnerId
            }
        })
}

export async function downloadFileFromSupabase(fileId: string, fileType: string) {
    return await supabase
        .storage
        .from(import.meta.env.VITE_SUPABASE_STORAGE_BUCKET_ID)
        .download(
            `/${fileId}.${fileType}`, {})
}
