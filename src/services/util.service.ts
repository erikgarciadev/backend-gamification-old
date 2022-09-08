import Db from '../config/mongo'

class UtilService {
    async downloadBackup(fileName: string) {
        await Db.backup(fileName)
    }
}

export default new UtilService()
