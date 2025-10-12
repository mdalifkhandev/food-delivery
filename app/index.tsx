import { Button, FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import '../global.css'
import { SafeAreaView } from 'react-native-safe-area-context';
import { offersData } from '@/components/data';
import image from '@/assets/right-arrow.png'
import image2 from '@/assets/arrow-down.png'
import CardComponent from '@/components/mini/CardComponent';

export default function Index() {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView>

      </ScrollView>
      <FlatList
        data={offersData}
        renderItem={({ item, index }) => {
          const isEvent = index % 2 === 0
          return (
            <View>
              <Pressable className={`rounded-xl h-48 mt-4 flex ${isEvent ? 'flex-row' : 'pl-5 flex-row-reverse'}`} style={{ backgroundColor: item.color }}>
                {({ pressed }) => (
                  <>
                    <View className='h-full w-1/2'>
                      <Image source={item.img} className='size-full ' resizeMode={'contain'} />
                    </View>
                    <View className='h-full w-1/2 mt-5'>
                      <Text className='font-bold text-4xl text-gray-300'>{item.title}</Text>
                      <Pressable className='border w-24 border-l-2 border-white rounded-3xl py-2 px-4 mr-9 ml-3 mt-5'>
                        <Text className='text-3xl text-center'>
                          <Image source={image} className='h-6 ' resizeMode={'contain'} />
                        </Text>
                      </Pressable>

                    </View>
                  </>
                )}
              </Pressable>
            </View>
          )
        }}
        ListHeaderComponent={() => (
          <View className=' flex-row justify-between w-full my-5 px-5'>
            <View>
              <Text className='font-semibold text-sm text-orange-500'>DELIVER TO</Text>
              <TouchableOpacity className='flex-row items-center gap-3 mt-0.5'>
                <Text className='font-bold text-black'>Croatia</Text>
                <Image source={image2} className='size-3 mt-1' />
              </TouchableOpacity>
            </View>
            <View>
              <CardComponent />
            </View>
          </View>
        )}
      />
    </SafeAreaView >
  );
}
