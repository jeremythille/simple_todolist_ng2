export class Todo {
	_id: string;
	created : Date;
	title: string = '';

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}