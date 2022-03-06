import { getRepository, InsertResult } from "typeorm"

import { Post } from "@/resources/entity/post.entity"

export class PostService {
    private post = getRepository(Post)

    /**
     * Create a new post
     */
    public async create(title: string, body: string): Promise<InsertResult> {
        try {
            const result = await this.post.insert({ title, body })
            return result
        } catch (_) {
            throw new Error("Unable to create post")
        }
    }
}
