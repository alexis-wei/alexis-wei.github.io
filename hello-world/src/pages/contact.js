import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
    <Layout>
        <Link to="/">Home</Link>
        <Header headerText="Contact" />
        <p>Send us a message!</p>
        <p>
            <a href="mailto:alexis_wei@berkeley.edu">Email</a>
        </p>
    </Layout>

)