export async function getCharacters() {
	try {
		let response = await fetch('https://www.swapi.tech/api/planets',{
			method: 'GET'
		})
		let data = await response.json()

        if (response.status === 200) {
            return data.results
        }
		
		
		
	 } catch (error) {
		console.log(error);
		
	 }
	
   }