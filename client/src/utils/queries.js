import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query Categories {
    categories {
      name
    }
  }
`;

export const QUERY_SINGLE_CATEGORY = gql`
  query Category($name: String!) {
    category(name: $name) {
      name
      products {
        _id
        title
        description
        image
        price
      }
    }
  }
`;

export const QUERY_SINGLE_PRODUCT = gql`
  query Product($productId: ID!) {
    product(productId: $productId) {
      _id
      createdAt
      description
      image
      price
      title
    }
  }
`;

export const QUERY_FEATURED_PRODUCTS = gql`
  query Products {
    products {
      _id
      title
      description
      image
      price
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      favourites {
        _id
        imageUrl
        price
        productName
      }
      orders {
        _id
        createdAt
        customerAddress
        customerName
        items {
          imageUrl
          price
          productName
        }
      }
    }
  }
`;

export const QUERY_SEARCH = gql`
  query RecentArt {
    recentArt {
      recentArt {
        _id
        productName
        price
        imageUrl
      }
    }
  }
`;
