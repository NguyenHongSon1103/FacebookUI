/*
List post api: 
Input:
- index: 
- count: 
Output: 
{
  code: string
  message: string
  data: {
    post: {
      id: string
      name: string
      image: string
      video: {
        url: string
        thumb: string
      }
      described: string
      created: string
      like: string
      comment: string
      is_liked: bool
      is_blocked: bool
      can_comment: bool
      can_edit: bool
      baned: bool
      state: string
      author: {
        id: string
        username: string
        avatar: string
        online: bool
      }
    new_items: string
    last_id: string
    }
    in_campaign: string
    campaign_id: string
  }

}
*/ 