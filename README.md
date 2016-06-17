# OpenJGL
The Open JavaScript Game Library

Created by [Robin Arys](http://www.zedutchgandalf.be).

## About OpenJGL
I created OpenJGl to use for the [Ludum Dare](http://ludumdare.com/compo/) Compo. Therefore, OpenJGL mainly focuses on quick prototyping and not so much on providing fully functional fleshed-out game systems.

## Design Philosophy
OpenJGL is a game library, *not* a game engine. You can think of OpenJGL as a collection of small building blocks that will help you create anything you can think of, while abstracting away a lot of the lower level stuff. But it does this without forcing your game into a certain direction, we still want you to be as free as possible. OpenJGL is designed to help you, not to hinder you or to slow you down.

## Architecture
OpenJGL uses a tree-like [MVC](https://en.wikipedia.org/wiki/Model–view–controller) architecture that makes heavy use of event systems. Currently, there's one (big) tree that contains all objects that have to be rendered, the View. The edge nodes of this tree should contain (nearly) all data, while the inner nodes should contain most functionality. Since the architecture is still more or less in flux, this is all still very provisional.

## Current State of OpenJGL
OpenJGL uses test driven development. We're currently setting up the build environment.
The current code base of OpenJGL is an unorganized mess of different things that were written during Ludum Dare 34 (for [The Daring Entrepreneur](https://zedutchgandalf.itch.io/the-daring-entrepreneur)). We're working on resolving that to get it in line with the OpenJGL Design Philosophy and Architecture.

## Contributing to OpenJGL
People wanting to contribute can just submit a Pull Request. Your PR will be reviewed and you might receive some feedback if something needs improving, or it might be merged immediately, depending on your code. If you have a question/suggestion, feel free to create an issue (please check for duplicates before submitting a new issue).

## Coding Guidelines
OpenJGL follows the [SOLID principle](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design).  
- Functions should always have a single responsibility, they should only do one thing. This means that a function should probably always be around 10-15 lines of code. This is not a hard limit, mere a general guideline.
- Functions that modify objects should return an instance of the object, to facilitate method chaining.