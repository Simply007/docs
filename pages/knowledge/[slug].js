import Layout from '~/components/layout/knowledge'
import { getKnowledgeArticleBySlug } from '~/lib/data/datocms'

export default ({ article }) => <Layout article={article} />

export async function getStaticProps({ params: { slug } }) {
  const article = await getKnowledgeArticleBySlug(slug)

  return {
    props: { article },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export const config = {
  amp: 'hybrid',
}
