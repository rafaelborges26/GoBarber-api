import {Request, Response} from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import AuthenticateService from '@modules/users/services/AuthenticateUserService'


export default class SessionsController {

    public async create(request: Request, response: Response) {

        const { email, password } = request.body

        const authenticateUser = container.resolve(AuthenticateService)

        const { user, token } = await authenticateUser.execute({
            email,
            password
        })

        return response.json({user: classToClass(user), token})
    }



}
