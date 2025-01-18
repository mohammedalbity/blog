export interface Post {
    id: number;
    title: string;
    description: string;
    category_id: string;
    category_name: string;
    image: string;
    post: Post;
    message: null,
    errors: [],
}
export interface Comment {
    id: number;
    body: string;
    username: string;
    post_id: string;
    avatar: string;
    comment: Comment;
    message: null,
    errors: [],
    created_at: string;
}


export interface Tag {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    message: null,
    tag: Tag
}

export interface Category {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    message: null,
    category: Category
}

export interface Setting {
    id: number;
    websiteName: string;
    description: string;
    postCount: string;
    logo: '',
    setting: Setting
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    avatar: string;
    created_at: string;
    updated_at: string;
    message: null,
    user: User;
}

export interface responsePostApi {
    data: Post[],
    meta: Meta
}
export interface responseCommentApi {
    comment: Comment[],
    meta: Meta
}

export interface responseCategoryApi {
    data: Category[],
    meta: Meta
}

export interface responseTagApi {
    data: Tag[],
    meta: Meta
}

export interface responseUserApi {
    data: User[],
    meta: Meta
}

export interface Pagination {
    current_page: number,
    total: number,
    per_page: number,
}

export interface Meta {
    current_page: number;
    total: number;
    per_page: number;
    last_page: number;
}