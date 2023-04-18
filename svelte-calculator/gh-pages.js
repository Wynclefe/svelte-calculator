var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Wynclefe/svelte-calculator', // Update to point to your repository  
        user: {
            name: 'wynclefe' // update to use your name
            email: 'wynclefe@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)