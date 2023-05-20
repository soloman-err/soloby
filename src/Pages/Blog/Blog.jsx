import React from "react";

const Blog = () => {
  return (
    <div className="w-[70%] mx-auto">
      <h1 className="text-center font-bold text-2xl underline underline-offset-4 custom-title">
        Generic Article
      </h1>

      <section className="text-start mt-5 space-y-10 divide-y">
        {/* Q-1 */}
        <article className="space-y-1">
          <h1 className="font-bold text-xl">
            What is expressJS? and What is NextJS?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            mollitia ratione dignissimos? Facere repellat magnam eum voluptates,
            id aspernatur unde velit tempora similique reiciendis odio deleniti
            numquam. Odio, eveniet accusantium?
          </p>
        </article>

        {/* Q-2 */}
        <article className="space-y-1">
          <h1 className="font-bold text-xl">
            What is mongoDB aggregate & how does it works?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            mollitia ratione dignissimos? Facere repellat magnam eum voluptates,
            id aspernatur unde velit tempora similique reiciendis odio deleniti
            numquam. Odio, eveniet accusantium?
          </p>
        </article>

        {/* Q-3 */}
        <article className="space-y-1">
          <h1 className="font-bold text-xl">
            what is Access Token & Refresh Token? How do they work & Where
            should we store them on the client-side?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            mollitia ratione dignissimos? Facere repellat magnam eum voluptates,
            id aspernatur unde velit tempora similique reiciendis odio deleniti
            numquam. Odio, eveniet accusantium?
          </p>
        </article>

        {/* Q-4 */}
        <article className="space-y-1">
          <h1 className="font-bold text-xl">Compare SQL and NoSQL database.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            mollitia ratione dignissimos? Facere repellat magnam eum voluptates,
            id aspernatur unde.
          </p>
          <table class="border border-gray-300 mx-auto">
            <thead className="bg-base-200">
              <tr>
                <th class="border-b">SQL</th>
                <th class="border-b">NoSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-b">
                  <ul class="list-disc list-inside">
                    <li>SQL is a relational database management system.</li>
                  </ul>
                </td>
                <td class="border-b">
                  <ul class="list-disc list-inside">
                    <li>
                      NoSQL is a non-relational database management system.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
    </div>
  );
};

export default Blog;
