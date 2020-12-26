import React from 'react'

class Page extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  async loadData(){
      console.log('loadData')
      const data = await Page.getInitialProps()
      console.log(data)
  }

  render() {
    return <div>
        <button onClick={()=> this.loadData()}>load</button>
        Next stars: {this.props.stars}
        </div>
  }
}

export default Page