import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export const  getPostFiles = () => fs.readdirSync(postsDirectory)

export function getPostData(fileName) {
    const postSlug = fileName.replace(/\.md$/, '')
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileData = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileData)

    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData
}

export function getAllPosts() {
    const postFiles = getPostFiles()
    return postFiles.map(postFile => getPostData(postFile)).sort((a,b) => a.date > b.date ? -1 : 1)
}
    
export function getFeaturedPosts() {
    return getAllPosts().filter(post => post.isFeatured)
}