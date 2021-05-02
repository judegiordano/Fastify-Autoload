import { Article as _Article, IArticle } from "../Models/Article";

export class Article {

	public static async Insert(body: IArticle): Promise<_Article> {
		try {
			const exists = await _Article.findOne({ title: body.title });
			if (exists) throw "article title taken";

			const article = new _Article();
			article.title = body.title;
			article.excerpt = body.excerpt;
			article.body = body.body;

			return await article.save();
		} catch (error) {
			throw new Error(error);
		}
	}

	public static async GetAll(): Promise<_Article[]> {
		try {
			return await _Article.find();
		} catch (error) {
			throw new Error(error);
		}
	}

	public static async GetById(id: number): Promise<_Article> {
		try {
			const exists = await _Article.findOne({ id });
			if (!exists) throw "article not found";

			return exists;
		} catch (error) {
			throw new Error(error);
		}
	}

	public static async DeleteById(id: number): Promise<_Article> {
		try {
			const exists = await _Article.findOne({ id });
			if (!exists) throw "article not found";

			return await _Article.remove(exists);
		} catch (error) {
			throw new Error(error);
		}
	}
}