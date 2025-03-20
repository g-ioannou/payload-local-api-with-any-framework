import { config } from '@repo/admin/config'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

const ORIGINS = process.env.CORS_ORIGINS?.split(',')

config.editor = lexicalEditor()

if (ORIGINS) config.cors = ORIGINS

export default buildConfig(config)
