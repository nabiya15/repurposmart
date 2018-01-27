import React from 'react';
import {Row, Input} from "react-materialize";

class PostItemForm extends React.Component {
	createItemPost(event) {
		event.preventDefault();
		console.log('gonna post an item');

		// Create item object
		const item = {
			title: this.title.value,
			image: this.image.value,
			price: this.price.value,
			category: this.category.value,
			description: this.desc.value
			// seller:
			// id:
		};

		console.log(item);

		// POST item to db

		this.itemForm.reset();
		// Basic JS function to clear the inputs after the form is submitted
	}

	render() {
		return (
			<div className="container">
				<form
					ref={input => (this.itemForm = input)}
					onSubmit={e => this.createItemPost(e)}
				>
					<input
						ref={input => (this.title = input)}
						type="text"
						placeholder="Item Title"
					/>
					<input
						ref={input => (this.price = input)}
						type="text"
						placeholder="Item Price"
					/>
					<input
						ref={input => (this.image = input)}
						type="text"
						placeholder="Image URL"
					/>
					<div className="input-field col s12">
						<Row>
							<Input
								s={12}
								type="select"
								label="Materialize Select"
								defaultValue="0"
							>
								<option value="0" disabled>Category</option>
								<option value="1">Kitchen & Bathroom</option>
								<option value="2">Exterior Building Supplies</option>
								<option value="3">Interior Building Supplies</option>
							</Input>
						</Row>
					</div>
					Item Description:
					<textarea
						ref={input => (this.desc = input)}
						type="text"
						placeholder="Item Description"
					>
						{' '}
					</textarea>
					<button type="submit">+ Post Item</button>
				</form>
			</div>
		);
	}
}

export default PostItemForm;
