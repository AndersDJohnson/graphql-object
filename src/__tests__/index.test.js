import gql from "graphql-tag";
import graphql from "..";

const firstName = "Somebody";
const lastName = "Important";
const title = "Pusher";
const name = "Jobs Inc.";
const address = "123 Main St.";

const object = {
  firstName,
  lastName,
  job: {
    title,
    extra: true,
    company: {
      name,
      address
    }
  }
};

describe("graphql", () => {
  test("works", () => {
    expect(
      graphql(
        object,
        gql`
          {
            firstName
            lastName
            job {
              title
              company {
                name
                unknown
              }
            }
          }
        `
      )
    ).toEqual({
      firstName,
      lastName,
      job: {
        title,
        company: {
          name
        }
      }
    });
  });
});
