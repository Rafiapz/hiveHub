import {IDependencies} from '../auth/application/interfaces/IDependencies'
import * as useCases from '../auth/application/useCases'
import * as repositories from '../auth/infrastructure/database/repositories'


export const dependancies:IDependencies={repositories,useCases}