import React from 'react';

class PostItemForm extends React.Component {
	createItemPost(event) {
		event.preventDefault();
		console.log("gonna post an item");

		// Create item object 
		const item = {
			title: this.title.value,
			image: this.image.value,
			price: this.price.value,
			category: this.category.value,
			description: this.desc.value
			// seller:
			// id:
		}

		console.log(item);

		// POST item to db 


		this.itemForm.reset();
		// Basic JS function to clear the inputs after the form is submitted
	}



	render() {
		return(
			<form ref={(input) => this.itemForm = input} onSubmit={(e) => this.createItemPost(e)}>
				<input ref={(input) => this.title = input} type="text" placeholder="Item Title"/>
				<input ref={(input) => this.price = input} type="text" placeholder="Item Price"/>
				Item Description:
				<textarea ref={(input) => this.desc = input} type="text" placeholder="Item Description"> </textarea>
				<select ref={(input) => this.category = input}>
					<option value="kitchen">Kitchen & Bathroom</option>
					<option value="exterior">Exterior Building Supplies</option>
					<option value="interior">Interior Building Supplies</option>
				</select>
				<input ref={(input) => this.image = input} type="text" placeholder="Image URL"/>

				<button type="submit">+ Post Item</button>
			</form>

		)

	}

}

export default PostItemForm; 
