import { articles_url, apikey } from '../config/rest_consfig';

export async function getArticles(section='home') {

    try {
        let articles = await fetch(`${articles_url}${section}.json?api-key=${apikey}`)

        
        let result = await articles.json();
        articles = null;
        console.log(articles);

        return result.results;
    }
    catch(error) {
        throw error;
    }
}
