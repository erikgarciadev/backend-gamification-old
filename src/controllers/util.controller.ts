import { Request, Response } from 'express'
import UtilService from '../services/util.service'

class UtilController {
    async downloadBackup(req: Request, res: Response) {
        const d = new Date()
        const fileName = `BackupData-${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}.gzip`

        try {
            await UtilService.downloadBackup(fileName)

            const directoryPath = process.cwd() + '/'
            res.download(directoryPath + fileName, fileName, (err) => {
                if (err) {
                    res.status(500).send({
                        message: 'Could not download the file. ' + err
                    })
                } else {
                    res.status(200).send({
                        message: 'Download the file.'
                    })
                }
            })
        } catch (err) {
            res.status(500).send({
                message: 'Could not download the file. ' + err
            })
        }
    }
}

export default new UtilController()
