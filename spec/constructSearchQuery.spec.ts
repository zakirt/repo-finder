import { constructSearchQuery } from '../src/utils/constructSearchQuery';

describe('constructSearchQuery', () => {
    let queryConstructTests;

    beforeAll(() => {
        queryConstructTests = [
            {
                input: {
                    q: 'tetris',
                    stars: '<10',
                    fork: true,
                    license: 'MIT'
                },
                result: 'q=tetris+stars:<10+license:MIT+fork:true'
            },
            {
                input: {
                    stars: '2',
                    fork: true
                },
                result: 'q=stars:2+fork:true'
            },
            {
                input: {
                    q: 'tetris',
                    stars: '10..20',
                    fork: false,
                    license: 'MIT'
                },
                result: 'q=tetris+stars:10..20+license:MIT'
            }
        ];
    });

    it('should be defined', () => {
        expect(constructSearchQuery).toBeDefined();
    });

    it('should construct a search query string', () => {
        queryConstructTests.forEach((item: any) => {
            const { input, result } = item;
            expect(constructSearchQuery(input)).toBe(result);
        });
    });
});
