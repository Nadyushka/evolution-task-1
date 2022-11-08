const rectangle = require('../js/rectangle');

test('should properly return Rectangle Perimeter 1.0', () => {
	const RectanglePerimeter = rectangle.getRectanglePerimeter(2, 5)
	expect(RectanglePerimeter).toBe(14)
})

test('should properly return Rectangle Perimeter 2.0', () => {
	const RectanglePerimeter = rectangle.getRectanglePerimeter(10, 10)
	expect(RectanglePerimeter).toBe(40)
})

test('should properly return Rectangle Area 1.0', () => {
	const RectangleArea = rectangle.getRectangleArea(2, 5)
	expect(RectangleArea).toBe(10)
})

test('should properly return Rectangle Area 2.0', () => {
	const RectangleArea = rectangle.getRectangleArea(10, 10)
	expect(RectangleArea).toBe(100)
})

test('should properly return Rectangle Info 1.0', () => {
	const RectangleInfo = rectangle.getRectangleInfo(2, 5)
	expect(RectangleInfo).toBe('The perimeter of a rectangle is 14 and the area is 10')
})

test('should properly return Rectangle Info 2.0', () => {
	const RectangleInfo = rectangle.getRectangleInfo(10, 10)
	expect(RectangleInfo).toBe('The perimeter of a rectangle is 40 and the area is 100')
})



