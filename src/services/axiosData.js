/**
 * TIPS
 * Read up some react tips for improving performance
 * https://www.freecodecamp.org/news/how-to-work-with-react-the-right-way-to-avoid-some-common-pitfalls-fc9eb5e34d9e/
 */

import axios from "axios";

/**
 * Helper for calling axios services
 */
export default async ({ url, method, data, signal, params }) => {
     try {
          const result = await axios({
               method,
               url,
               ...(params && { params }),
               ...(signal && { cancelToken: signal }),
               ...(data && { data }),
               headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                    // "Access-Control-Allow-Origin": "*",
               },
          });
          return { data: result.data };
     } catch (error) {
          if (axios.isCancel(error)) {
               console.log("Error: ", "Cancelling axios");
          }
          return { error };
     }
};
