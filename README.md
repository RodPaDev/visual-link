# VisuaLink

VisuaLink is an interactive website for aspiring software engineers, to visualize and interact with LinkedLists.

This project is under development and will be coming to your local google searches soon 🚀

[Research Document](https://docs.google.com/document/d/1-k6oKl4wDBx7bkoT7yxXhFJ01QDU6wXEA12JU-15BfI/edit?usp=sharing)

# Getting Started

You can get started by running:

```
npm start - run developing environment
npm build - build production code for hosting
npm test - test code ( no tests implemented to the moment)
```

## Changes

After some consideration, I came to the conculsion that using React would facilitate the whole process, while also introducing some interesting desgin problems, that I'm very eager to solve.

## State Of Project

As of now, the project only has the visual representation of the node rendered, this is not wired to a linked list yet.

## Design Decisions

I've decided to forego the usage of Redux and instead use reducer and context api.

The hardest part will be definitely find out a way to use a Linked List as state, I may have to create a whole library first, or instead have nodes stored in a hashmap.

## Plan

- [x] Visual Representation (VR) of Node  
- [ ] VR of Arrows connecting Nodes  
- [ ] Render VR of Linked List based on Linked List  
- [ ] Create VR of Node using using events  
- [ ] Delete VR of Node using events  
- [ ] Create several interactive animations for different operations  

