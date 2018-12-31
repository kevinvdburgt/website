import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default class Index extends Component {
  render() {
    return <>
      <Head>
        <title>Kevin van der Burgt</title>
      </Head>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img src="/static/kevinvdburgt.jpg" alt="Kevin van der Burgt" style={{ borderRadius: '50%', maxWidth: 200, marginBottom: 40 }} />
            <h1 className="title">Kevin van der Burgt</h1>
            <h2 className="subtitle">Freelance software engineer. Interested in security, networking, electronics and game physics.</h2>

            <Link href="https://github.com/kevinvdburgt">
              <a>GitHub</a>
            </Link> | <Link href="https://twitter.com/kevinvdburgt">
              <a>Twitter</a>
            </Link> | <Link href="https://reddit.com/u/xehbit">
              <a>Reddit</a>
            </Link>
          </div>
        </div>
      </section>
    </>;
  };
};
