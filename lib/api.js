const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }
  return json.data
}

export async function getHomePosts() {
  const data = await fetchAPI(`
  {
    posts(first: 5) {
      edges {
        node {
          link
          postId
          date
          slug
          title
          tags {
            nodes {
              name
              slug
              uri
            }
          }
          author {
            node {
              firstName
            }
          }
          excerpt(format: RAW)
          categories {
            nodes {
              name
              uri
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
  }
    `)
  return data
}
