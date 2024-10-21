import { apiVersion, dataset, projectId } from '@/sanity/env'
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  apiVersion,
  dataset,
  projectId,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})
