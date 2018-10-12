import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <p><Link to="/notes/">Notes</Link></p>
    <p><Link to="/tags/">Tags</Link></p>
  </Layout>
)

export default IndexPage
