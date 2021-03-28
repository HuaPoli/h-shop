import request from './request'

export function getImglist() {
    return request({
        url: '/imglist'
    })

}