import mail from '@adonisjs/mail/services/main'
import EmailInterface from '../../interfaces/email_interface.js'

export default class EmailService {
  async send(options: EmailInterface) {
    await mail.send((message) => {
      message
        .to(options.email)
        .from(process.env.EMAIL_SENDER || 'iagokorn@gmail.com')
        .subject(options.subject)
        .htmlView(options.view, options.dataView)
    })
  }
}
