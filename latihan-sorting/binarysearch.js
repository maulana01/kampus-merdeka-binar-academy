let root = {
    key: 8,
    right: {
        key: 10,
        right: {
            key: 14,
            right: {
                key: null
            },
            left: {
                key: 13,
            },
        },
        left: {
            key: null
        }
    },
    left: {
        key: 3,
        right: {
            key: 6,
            right: {
                key: 7,
                right: {
                    key: null,
                },
                left: {
                    key: null
                }
            },
            left: {
                key: 4,
                right: {
                    key: null,
                },
                left: {
                    key: null
                }
            }
        },
        left: {
            key: 1,
            right: {
                key: null,
            },
            left: {
                key: null,
            }
        }
    }
}

const binarySearch = (root, key) => {
    if(root == null || root.key == key){
        return root
    }

    // console.log(root.key)
    if(root.key < key){
        return binarySearch(root.right, key)
    }else{
        return binarySearch(root.left, key)
    }
}


console.log(binarySearch(root, 8))